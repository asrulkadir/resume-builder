import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
