import SwipeHorizontal from '../../SwipeHorizontal/SwipeHorizontal';
import TextSwipe from '../../TextSwipe/TextSwipe';

const HeroSwipeHorizontal = ({ title, theme = 'white' }: { title: string; theme?: string }) => {
    return (
        <SwipeHorizontal>
            <TextSwipe theme={theme} text={title} />
        </SwipeHorizontal>
    );
};

export default HeroSwipeHorizontal;
