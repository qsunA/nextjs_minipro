import Document, { Head, Main, NextScript } from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import React from 'react';

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp : App => props => sheets.collect(<App {...props}/>)
            });
        
        const initialProps= await Document.getInitialProps(ctx);

        return{
            ...initialProps,
            styles: (
                <React.Fragment>
                    {initialProps.styles}
                    {sheets.getStyleElement()}
                </React.Fragment>
            )
        }
    }

    render(){
        return(
            <html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )        
    }
}

export default MyDocument;