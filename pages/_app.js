import App from 'next/app';
import { Provider } from 'mobx-react';
import DetailStore from '../src/stores/DetailStore';

const root = new DetailStore();

class MyApp extends App{

    static async getInitialProps({Component, ctx}){
        let pageProps= {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    render(){
        const {Component, pageProps} = this.props;

        return(
            <Provider store={root}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

export default MyApp;