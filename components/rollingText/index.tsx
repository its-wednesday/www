import styled, { keyframes } from 'styled-components';
import { Component, Fragment } from 'react';

interface IRollingTextProps {
  animationDuration?: number;
  phrases: string[];
  overlay?: boolean;
  overlaySrc?: string;
  interval?: number;
}

interface IRollingTextState {
  currentPhraseIndex: number;
  isAnimating: boolean;
}

const TextRelative = styled.div`
width: 100%;
  position: relative;
  perspective: 320px;
  overflow: visible;
`;

const TextAbsolute = styled.span`
  z-index: -1;

  position: absolute;
  width: 100%;
  overflow: visible;
`;

const TextInvisible = styled.span`
  visibility: hidden;
`;

const MaskedText = styled.span`
  background-clip: text;
  /* stylelint-disable-next-line */
  -webkit-background-clip: text !important;
  color: transparent !important;
  background-image: radial-gradient(
    orange,
    purple
  ) !important;
  background-size: 100vw 100vh;
`;

const fragmentSlideOut = keyframes`
  from {
    transform: translate3d(0, 0, 0) rotate3d(0);
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  to {
    transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 6deg);
    opacity: 0;
  }
`;

const fragmentSlideIn = keyframes`
  from {
    transform: translate3d(0, 100%, 0) rotate3d(1, 0, 0, -6deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0) rotate3d(0);
    opacity: 1;
  }
`;

const FragmentOut = styled(MaskedText)<{
  duration: number,
  delay: number,
}>`
display: inline-block;
opacity: 1;
animation: ${fragmentSlideOut} ${(props) => props.duration}ms ease-out ${(props) => props.delay || 0}ms forwards;
`;

const FragmentIn = styled(MaskedText)<{
  duration: number
  delay: number,
}>`
display: inline-block;
opacity: 0;
  animation: ${fragmentSlideIn} ${(props) => props.duration}ms ease-out ${(props) => props.delay || 0}ms forwards;
`;

const TextFragments = ({
  currentPhrase,
  previousPhrase,
  duration,
}: {
  currentPhrase: string,
  previousPhrase: string,
  duration: number;
}) => {
  const currentPhraseFragments = currentPhrase.split(' ');
  const previousPhraseFragments = previousPhrase.split(' ');

  return (
    <TextRelative>
      <TextAbsolute>
        <Fragment>
          It's Wednesday {` `}
          {
            previousPhraseFragments.map((fragment, index) => (
              <Fragment key={fragment + index}>
                <FragmentOut duration={duration} delay={(previousPhraseFragments.length - index) * 50}>
                  {fragment}
                </FragmentOut>
                {' '}
              </Fragment>
            ))
          }
        </Fragment>
      </TextAbsolute>

      <TextAbsolute>
        <Fragment>
          It's Wednesday {` `}
          {
            currentPhraseFragments.map((fragment, index) => (
              <Fragment key={fragment + index}>
                <FragmentIn duration={duration} delay={index * 50 + duration}>
                  {fragment}
                </FragmentIn>
                {' '}
              </Fragment>
            ))
          }
        </Fragment>
      </TextAbsolute>

      <TextInvisible>It's Wednesday {` `} {currentPhrase}</TextInvisible>
    </TextRelative>
  );

};

export class RollingText extends Component<IRollingTextProps, IRollingTextState> {
  private timer: number | undefined;

  static defaultProps = {
    interval: 5000,
    animationDuration: 700,
    overlay: false,
  };

  state = {
    currentPhraseIndex: 0,
    isAnimating: false,
  };

  incrementCurrentPhraseIndex() {
    const { phrases } = this.props;
    const { currentPhraseIndex } = this.state;

    if (!phrases.length) return;

    const upperLimit = phrases.length - 1;
    const nextCurrentPhraseIndex = currentPhraseIndex === upperLimit
      ? 0
      : currentPhraseIndex + 1;

    console.log('should start animation');
    this.setState({
      currentPhraseIndex: nextCurrentPhraseIndex,
      isAnimating: true,
    });

    setTimeout(() => {
      console.log('should stop animation');
      this.setState({
        isAnimating: false,
      }, () => this.startIncrementTimer());
    }, this.animationDuration * 2.5);
  }

  get nextPhraseIndex() {
    const { phrases } = this.props;
    const upperLimit = phrases.length - 1;

    return upperLimit === this.state.currentPhraseIndex
      ? 0
      : this.state.currentPhraseIndex + 1;
  }

  get previousPhraseIndex() {
    const { phrases } = this.props;
    const upperLimit = phrases.length - 1;

    return this.state.currentPhraseIndex === 0
      ? upperLimit
      : this.state.currentPhraseIndex - 1;
  }

  get previousPhrase() {
    let previousPhrase;
    const { phrases } = this.props;

    if (phrases.length === 1) {
      previousPhrase = phrases[0];
    } else {
      previousPhrase = phrases[this.previousPhraseIndex];
    }

    return previousPhrase;
  }

  get currentPhrase() {
    return this.props.phrases[this.state.currentPhraseIndex];
  }

  get animationDuration() {
    const counts = [
      this.currentPhrase.split(' ').length,
      this.previousPhrase.split(' ').length,
    ];

    return Math.max.apply(Math, counts) * 30 + (
      this.props.animationDuration as number
    );
  }

  startIncrementTimer() {
    const { phrases, interval } = this.props;

    if (phrases.length && interval) {
      console.log('starting timer');
      this.timer = setTimeout(this.incrementCurrentPhraseIndex.bind(this), interval);
    }
  }

  destroyIncrementTimer() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    this.startIncrementTimer();
  }

  componentWillUnmount() {
    this.destroyIncrementTimer();
  }

  getTextFragments() {
    let fragments;

    if (this.state.isAnimating) {
      fragments = <TextFragments
        duration={this.animationDuration}
        currentPhrase={this.currentPhrase}
        previousPhrase={this.previousPhrase} />;
    } else {
      fragments = (
        <Fragment>
          {`It's Wednesday `}
          <MaskedText>{this.currentPhrase}</MaskedText>
        </Fragment>
      );
    }

    return fragments;
  }

  render() {
    console.log('leak');
    const { phrases } = this.props;
    let result = null;

    if (phrases.length) {
      result = <Fragment>{this.getTextFragments()}</Fragment>;
    }


    return result;
  }
}
