import React, { Fragment } from 'react';
import Link from 'next/link';
import { Nav, PageBody } from '../components/layout/styles';
import Head from "next/head";

const Layout=({children})=>{
    return(
        <Fragment>
            <Head>
                <style>
                    {
                        `body{
                            margin:0;
                            padding:0;
                        }
                        a{
                            text-decoration: none
                        }
                        `
                    }
                </style>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            </Head>
            <Nav>
                <Link href="/pageone">
                    <a>전체 상품보기</a>
                </Link>
                <Link href="/mypage">
                    <a>내 책 보기</a>
                </Link>
            </Nav>
            <PageBody>{children}</PageBody>
        </Fragment>
    );
}

export default Layout;