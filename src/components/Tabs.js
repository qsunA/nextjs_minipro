    
import React, { Fragment } from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabContainer, TabHead,Tab, TabBody } from "./layout/styles";
import BookItemList from "./book/BookItemList";
import DefaultPage from "./page/DefaultPage";
import Head from "next/head";

const Tabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <Fragment>
      <Head>
        <style>
          {
            `
              html,body{
                margin:0;
                padding:0;
                height:100%;
                overflow: auto;
                width:100%;
              }
              a{
                text-decoration:none
              }
            `
          }
        </style>
      </Head>
      <TabContainer>
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ pathname: "/test", query: { tab: "1" } }}>
              <a>Tab 1</a>
            </Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ pathname: "/test", query: { tab: "2" } }}>
              <a>Tab 2</a>
            </Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
          {isTabTwo && <React.Fragment><DefaultPage/></React.Fragment>}
        </TabBody>
      </TabContainer>
    </Fragment>
    
  )
}

export default withRouter(Tabs);