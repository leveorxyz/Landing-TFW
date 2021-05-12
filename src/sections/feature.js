/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'SUBSCRIBERS',
    title: '111K+',
    text:
      'YOUTUBE SUBSCRIBERS',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'VIEWS',
    title: '3.2M+',
    text:
      'YOUTUBE VIDEO VIEWS',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'VIDEOS',
    title: '40+',
    text:
      'VIDEOS ON YOUTUBE',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'PROJECTS',
    title: '30+',
    text:
      'FLUTTER GITHUB PROJECTS',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'STARS',
    title: '11k+',
    text:
      'STARS ON GITHUB',
  },
  {
    id: 6,
    imgSrc: Chat,
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
          title="At A Glance"
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
