import React, {Component} from 'react';
import '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss'

import logo from '../../bot-icon.svg';
import './app.css';

import Header, {Logo} from '@jetbrains/ring-ui/components/header/header';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import TestData from "../data_display/test";
import ContentLayout from "@jetbrains/ring-ui/components/content-layout/content-layout";
import Sidebar from "@jetbrains/ring-ui/components/content-layout/sidebar";
import Link from "@jetbrains/ring-ui/components/link/link";
import Button from "@jetbrains/ring-ui/components/button/button";
import {BrowserRouter, Route} from "react-router-dom";

/*
<!--<BrowserRouter>
  <Route path="/tags" component={TestData} />
</BrowserRouter>-->
*/

export default class AppRoot extends Component {

  render() {
    return (
      <div className="height-100">
        <Header>
          <a href="/">
            <Logo
              glyph={logo}
            />
          </a>
          <div id="header-title">IB.ai Dashboard</div>
          <Link href="#">Commands</Link>
          <Link href="#">Database</Link>
          <Link href="#">Configuration</Link>
        </Header>
        <ContentLayout className="body-content">
          <Sidebar className="sidebar">
            <ul className="sidebar-list">
              <li className="sidebar-item"><Button href="/tags" className="sidebar-button">Tags</Button></li>
            </ul>
          </Sidebar>
          <div className="presentation-area">
            <TestData />
          </div>
        </ContentLayout>
        <Footer
            className="footer"
            left={[
              [
                'IB.ai web panel by the IB Discord developer team.'
              ],
              [
                'Powered by ',
                {
                  url: 'https://jetbrains.github.io/ring-ui/',
                  label: 'JetBrains Ring-UI.',
                  title: 'JetBrains Ring-UI',
                  target: '_blank'
                },
              ]
            ]}
            center={[

            ]}
            right={[
              [{copyright: 2019, label: ' Jarred Vardy'}],
              {
                url: 'https://github.com/ib-ai/',
                label: 'License agreement',
                title: 'Licensing',
                target: '_blank'
              }
            ]}
          />
      </div>
    );
  }
}
