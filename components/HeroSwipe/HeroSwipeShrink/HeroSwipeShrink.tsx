import ShrinkAnimation from '../../ShrinkAnimation/ShrinkAnimation';
import TextSwipe from '../../TextSwipe/TextSwipe';

const HeroSwipeShrink = ({ theme = 'white', title }: { theme?: string; title: string }) => {
    return (
        <ShrinkAnimation>
            <TextSwipe theme={theme} text={title} />
        </ShrinkAnimation>
    );
};

export default HeroSwipeShrink;
