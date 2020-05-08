import React from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui/Layout';
import { ListBooks } from '../../modules/ListBooks';
import { Slider } from '../../widgets/Slider';
import { Title } from '../../ui/Title';
import './style.scss';
import slide2 from '../../static/slide2.jpg';
import slide3 from '../../static/slide3.jpg';
import slide4 from '../../static/slide4.jpg';
import slide5 from '../../static/slide5.jpg';
import slide6 from '../../static/slide6.jpg';

const slidesInfo = [
  {
    image: slide2,
    content:
      'Библиотека сохраняет и предоставляет доступ к богатому, разнообразному и устойчивому источнику знаний, чтобы информировать, вдохновлять и вовлекать вас в ваши интеллектуальные и творческие начинания.',
  },
  {
    image: slide3,
    content: 'Заходи и выбирай лучшие книги по минимальным ценам, у нас ты найдешь все необходимое',
  },
  {
    image: slide4,
    content:
      'Книга — это основа культуры, и такой она будет оставаться еще очень долго, наряду с новыми информационными технологиями.',
  },
  {
    image: slide5,
    content: 'Нельзя держать книги запертыми точно в тюрьме, они должны непременно переходить из библиотеки в память.',
  },
  {
    image: slide6,
    content:
      'Никому не давайте своих книг, иначе вы их уже не увидите. В моей библиотеке остались лишь те книги, которые я взял почитать у других.',
  },
];

function Home({ books }) {
  return (
    <React.Fragment>
      <Slider slidesInfo={slidesInfo} size="allWidth" displayDot slideShow />
      <Layout extraClass="container">
        <Title tagName="h1" position="center" color="blue">
          Популярные товары
        </Title>
        <ListBooks books={books} num={4} />
      </Layout>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.getBooks.books,
  };
}

export default connect(mapStateToProps)(Home);
