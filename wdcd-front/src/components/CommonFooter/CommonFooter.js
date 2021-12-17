import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Column,
    UnorderedList,
    ListItem
} from 'carbon-components-react';
import { Link16 } from '@carbon/icons-react';

const CommonFooter = () => (
  <Grid fullWidth style={{ marginBottom: "2rem"}}>
      <Row>
          <Column sm={2} md={4} lg={6}>
          &copy; 2021 SCH KEYSOL. Some rights reserved.
          </Column>
          <Column sm={0} md={2} lg={2}>
            <UnorderedList>                
                <ListItem>
                    <Link to="/">홈</Link>
                </ListItem>
                <ListItem>
                    <Link to="notice">공지사항</Link>
                </ListItem>
                <ListItem>
                    <Link to="qna">질문답변</Link>
                </ListItem>
            </UnorderedList>
          </Column>
          <Column sm={0} md={2} lg={2}>
              <UnorderedList>
                <ListItem>
                    <Link16 />
                    <a href="https://sch-keysol.github.io/about" target="_blank">KEYSOL 소개</a>
                </ListItem>
                <ListItem>
                    <Link to="license">오픈소스 라이선스</Link>
                </ListItem>
              </UnorderedList>
          </Column>
      </Row>
      <Row>
          <Column sm={6} md={0} lg={0}>
            <UnorderedList>                
                <ListItem>
                    <Link to="/">홈</Link>
                </ListItem>
                <ListItem>
                    <Link to="notice">공지사항</Link>
                </ListItem>
                <ListItem>
                    <Link to="qna">질문답변</Link>
                </ListItem>
            </UnorderedList>
          </Column>
      </Row>
      <Row>
          <Column sm={6} md={0} lg={0}>
              <UnorderedList>
                <ListItem>
                    <Link16 />
                    <a href="https://sch-keysol.github.io/about" target="_blank">KEYSOL 소개</a>
                </ListItem>
                <ListItem>
                    <Link to="license">오픈소스 라이선스</Link>
                </ListItem>
              </UnorderedList>
          </Column>
      </Row>
  </Grid>
);

export default CommonFooter;