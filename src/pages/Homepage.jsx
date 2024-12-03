
import AppLayout from './../layout/AppLayout';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import NewsletterSubscription from '../components/NewsletterSubscription';
import TrendingTopics from '../components/TrendingTopics';


const Homepage = () => {
    return (
        <AppLayout>
            
            <Banner/>
            <Blog/>
            <NewsletterSubscription/>
            <TrendingTopics/>
           
        </AppLayout>
    );
};

export default Homepage;
