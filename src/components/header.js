import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Head>
      <Logo src="/logo.png" alt="logo" />
      <Links>
        <Link href="/search">Search</Link>
        <Link href="/#">How It Works</Link>
        <Link href="/#">About</Link>
      </Links>
    </Head>
  );
}

export default Header;

const Head = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: block;
  width: 140px;
  height: 36px;
  margin-top: 32px;
  margin-left: 80px;
  cursor: pointer;
`;

const Links = styled.nav`
  margin-top: 41px;
  margin-right: 80px;
  font-family: 'Montserrat';
`;

const Link = styled.a`
  margin-left: 26px;
  text-decoration: none;
  line-height: 20px;
`;
