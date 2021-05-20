/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import videos from 'assets/graphics/videos.svg';
import projects from 'assets/graphics/projects.svg';
import uidesign from 'assets/graphics/ui-design.svg';

const data = [
  {
    id: 1,
    imgSrc: videos,
    altText: 'Helpful Tutorials',
    title: 'Helpful Tutorials',
    text:
      'We upload a lot of videos to help you to learn and improve your flutter skills',
  },
  {
    id: 2,
    imgSrc: projects,
    altText: 'Free Resources',
    title: 'Free Resources',
    text:
      'We provide free resources for everyone to build production-ready app',
  },
  {
    id: 3,
    imgSrc: uidesign,
    altText: 'UI Designing',
    title: 'UI Designing',
    text:
      'We teach how to create nice & beautiful UI with clean & readable code structure',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="The Flutter Way"
          title="Who Are We"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
