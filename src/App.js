import { React } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import { university_news_articles } from './data/articles';
import { opinion_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { ac_articles } from './data/articles';
import { city_news_articles } from './data/articles';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bios" element={<Section id="uni-news" header="UNIVERSITY NEWS" articles={university_news_articles}/>} />
        <Route path="/calendar" element={<Section id="city-news" header="CITY NEWS" articles={city_news_articles} />} />
        <Route path="/minutes" element={<Section id="opinion" header="OPINION" articles={opinion_articles} />} />
        <Route path="/guide" element={<Section id="a&c" header="A&C" articles={ac_articles} />} />
        <Route path="/form" element={<Section id="form" header="form" articles={sports_articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
