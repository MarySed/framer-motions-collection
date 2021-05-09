import SwipeDown from '../../SwipeDown/SwipeDown';
import TextSwipe from '../../TextSwipe/TextSwipe';

type Props = {
    title: string;
    theme?: string;
};

const HeroSwipeDown = ({ title, theme = 'white' }: Props) => {
    return (
        <SwipeDown>
            <TextSwipe theme={theme} text={title} />
        </SwipeDown>
    );
};

export default HeroSwipeDown;
