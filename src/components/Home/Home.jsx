import Container from 'components/Shared/Container';
import UserForm from 'components/UserForm/UserForm';

import s from './Home.module.scss';

const Home = () => {
  return (
    <section className={s.home}>
      <Container>
        <UserForm />
      </Container>
    </section>
  );
};

export default Home;
