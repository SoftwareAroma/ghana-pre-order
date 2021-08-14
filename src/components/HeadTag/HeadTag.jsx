import React from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import config from '../config/seo.json';

const HeadTag = () => {
    return (
        <>
            <DefaultSeo {...config} />
            <NextHead>
                <meta httpEquiv="X-UA-Compatible" content="IE=7"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="keywords" content="learn, questions, solve, interact, test yourself,"/>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Ghana Pre Order | Where quality matters - order for your product at your own convenience</title>
                <meta name="description" content="Are you in need of a product from any country but ghana, look no further, we are here to help with mini importations at affordable prices."/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
            </NextHead>
        </>
    );
}

export default HeadTag;