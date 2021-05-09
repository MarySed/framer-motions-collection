import Card from '../components/Card/Card';
import HeroSwipeShrink from '../components/HeroSwipe/HeroSwipeShrink/HeroSwipeShrink';
import Layout from '../components/Layout/Layout';

const ShrinkTrans = () => {
    return (
        <>
            <HeroSwipeShrink title={'title'} />
            <Layout>
                <Card title="title" description="description" />
                <Card title="title" description="description" />
                <Card title="title" description="description" />
                <Card title="title" description="description" />
                <Card title="title" description="description" />
                <Card title="title" description="description" />
            </Layout>
        </>
    );
};

export default ShrinkTrans;
