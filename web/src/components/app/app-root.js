import React, {Component} from 'react';
import Header, {Logo} from '@jetbrains/ring-ui/components/header/header';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import {Grid, Row, Col} from '@jetbrains/ring-ui/components/grid/grid';
import '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss'
import logo from '../../ib-logo.svg';

import './app.css';
import {ContentLayout, Sidebar} from "@jetbrains/ring-ui";

export default class AppRoot extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="height-100">
        <Header>
          <a href="/">
            <Logo
              glyph={logo}
              size={Logo.Size.Size48}
            />
          </a>
          <h1>
            Testing 123
          </h1>
        </Header>
        <ContentLayout>
          <Sidebar className="sidebar">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sodales tellus ac rutrum. Duis interdum tellus lorem, ac pulvinar lorem tempus et. Fusce nulla lacus, lobortis sed erat eu, blandit tincidunt turpis. Phasellus ut sollicitudin ligula, nec tempor justo. Nullam at dolor sagittis, volutpat erat id, interdum purus. In volutpat felis vel ex placerat, sed eleifend lectus egestas. Phasellus scelerisque magna eu odio porttitor, ac laoreet mauris tristique. Curabitur placerat turpis vel turpis posuere, a malesuada turpis feugiat. Vestibulum ac elit pulvinar, interdum odio a, pulvinar massa. Curabitur lacus ligula, mollis a lorem sed, ultricies bibendum lacus. Fusce enim est, gravida eget felis nec, placerat vestibulum nunc. Donec gravida augue vitae urna eleifend varius. Mauris porttitor dolor a diam elementum, et vulputate mi viverra. Vivamus commodo orci in consequat sagittis. Proin tempus lectus ut vestibulum sollicitudin.

            Cras dictum tortor non tempus laoreet. Suspendisse potenti. In erat nulla, sollicitudin sed metus in, placerat consectetur lorem. Aenean viverra convallis justo et volutpat. Mauris eget nulla fermentum, consequat leo sit amet, tempus dui. Duis tincidunt sapien id odio finibus malesuada. Proin elementum cursus magna at pulvinar. Etiam ornare erat ac congue accumsan.

            Aenean lacinia risus purus, non finibus augue suscipit non. Sed rutrum orci non nisi ultricies, eget dictum tellus consectetur. In pretium, quam vel laoreet elementum, lorem lorem vehicula nisl, sit amet consequat lacus sapien in quam. Maecenas nec malesuada massa, vel interdum augue. Sed hendrerit dictum vehicula. Donec sodales arcu non rhoncus pharetra. Sed posuere euismod auctor. Integer viverra ligula ac pellentesque mollis. Sed ultrices dui at venenatis blandit.

            Integer consectetur at quam sed vestibulum. Aenean molestie odio a bibendum ornare. Nullam venenatis, lacus eget volutpat viverra, dolor quam mattis sem, ut congue mauris felis in augue. Suspendisse sed quam lorem. Donec eget nisi non leo pretium hendrerit ac in odio. Pellentesque dignissim, massa at ullamcorper dapibus, odio metus tempus lacus, nec tincidunt sapien sapien sed ligula. Suspendisse cursus mauris libero, ut iaculis est lacinia in. Nunc rutrum, massa ut venenatis ultrices, dui ante sagittis urna, quis varius erat ante a libero. Proin accumsan nisi lacus, non efficitur sem consequat at. Mauris a bibendum dui. Curabitur sed porttitor mauris. Vestibulum semper arcu id quam euismod, at finibus sapien blandit. Fusce convallis dolor ac dui condimentum, vulputate lobortis dolor dignissim. Ut scelerisque libero ut scelerisque cursus.

            Suspendisse bibendum sagittis commodo. Curabitur commodo risus nec erat malesuada porta. Phasellus elementum est tortor, a eleifend nisl maximus sed. Donec maximus accumsan metus at pulvinar. Praesent imperdiet, libero sit amet scelerisque interdum, mi mi lacinia dui, et mattis ipsum augue vitae augue. Aenean imperdiet euismod justo, nec finibus orci molestie nec. Maecenas quis congue odio, et mollis nibh. Etiam eu lectus commodo, dignissim magna ut, facilisis erat. Phasellus molestie, tellus et condimentum porta, nulla metus sagittis arcu, sed bibendum quam justo eget libero. Vivamus lobortis dictum dui, sit amet sagittis sem auctor at. Aliquam porta interdum orci, quis maximus lectus interdum sed. Sed consectetur mattis lectus, vel semper mi placerat non.
          </Sidebar>
          <div className="app-content">
            <h1>A header</h1>
            <Grid>
              <Row start="xs">
                <Col xs={12} sm={4} md={6} lg={3} className="col1">
                  <div className="ring-island">
                    <div className="ring-island__header">
                      <span className="ring-island__title">Title</span>
                      <span className="ring-island__header-button">Button1</span>
                      <span className="ring-island__header-button">Button2</span>
                    </div>
                    <div className="ring-island__content">Content</div>
                  </div>
                </Col>
                <Col xs={12} sm={8} md={6} lg={3} className="col2">
                  <div className="ring-island">
                    <div className="ring-island__header">
                      <span className="ring-island__title">Title</span>
                      <span className="ring-island__header-button">Button1</span>
                      <span className="ring-island__header-button">Button2</span>
                    </div>
                    <div className="ring-island__content">Content</div>
                  </div>
                </Col>
                <Col xs={12} smOffset={4} sm={8} md={12} lg={6} className="col3">
                  <div className="ring-island">
                    <div className="ring-island__header">
                      <span className="ring-island__title">Title</span>
                      <span className="ring-island__header-button">Button1</span>
                      <span className="ring-island__header-button">Button2</span>
                    </div>
                    <div className="ring-island__content">Content</div>
                  </div>
                </Col>
              </Row>
            </Grid>
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
