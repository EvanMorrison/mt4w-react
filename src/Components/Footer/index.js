import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Row, Column } from '../Shared';

const FooterGroup = Row.extend`
  height: 120px;
  width: 100%;
  background: ${props => rgba(props.theme.primary, .8)};
  align-content: center;
`;

const Footer = () => (
    <FooterGroup>
      <Column>
      </Column>
      <Column>
        <p>&copy;2018</p>
        <p>Sunbright, LLC</p>
      </Column>
      <Column>
        <p>Facebook</p>
        <p>Twitter</p>
      </Column>
    </FooterGroup>
)

export default Footer;


