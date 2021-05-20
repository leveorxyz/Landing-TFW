/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

import Sub from 'assets/graphics/subscribe.svg';
import Views from 'assets/graphics/views.svg';
import Videos from 'assets/graphics/videos.svg';
import Projects from 'assets/graphics/projects.svg';
import Stars from 'assets/graphics/stars.svg';
import Rank from 'assets/graphics/rank.svg';

const data = [
  {
    id: 1,
    imgSrc: Sub,
    altText: 'SUBSCRIBERS',
    title: '113K+',
    text:
      'YOUTUBE SUBSCRIBERS',
  },
  {
    id: 2,
    imgSrc: Views,
    altText: 'VIEWS',
    title: '3.3M+',
    text:
      'VIDEO VIEWS',
  },
  {
    id: 3,
    imgSrc: Videos,
    altText: 'VIDEOS',
    title: '40+',
    text:
      'VIDEOS ON YOUTUBE',
  },
  {
    id: 4,
    imgSrc: Projects,
    altText: 'PROJECTS',
    title: '30+',
    text:
      'FLUTTER PROJECTS',
  },
  {
    id: 5,
    imgSrc: Stars,
    altText: 'STARS',
    title: '13k+',
    text:
      'STARRED PROJECTS',
  },
  {
    id: 6,
    imgSrc: Rank,
    altText: 'RANK',
    title: '#2',
    text:
      'MOST POPULAR FLUTTER CHANNEL',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="The Flutter Way"
          title="In Numbers"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
