import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Button, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/public/signup');
  };

  const goToSignInPage = () => {
    navigate('/public/signin');
  };

  const goToPrivatePage = (url) => {
    navigate('/private' + url);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, justifyContent: 'center'}}
        >
          {title}
        </Typography>
        <Stack spacing={1} direction="row">
          <Button variant="outlined" size="small" onClick={goToSignUpPage}>
            가입하기
          </Button>
          <Button variant="outlined" size="small" onClick={goToSignInPage}>
            로그인
          </Button>
        </Stack>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto' }}
      >
        <Stack spacing={2} direction="row">
        {sections.map((section) => (
          <Button
            color="inherit"
            key={section.title}
            variant="text"
            onClick={() => goToPrivatePage(section.url)}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Button>
        ))}
        </Stack>
        
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
