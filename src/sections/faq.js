/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Can I contact you guys for contract work or consulting?',
    contents: (
      <div>
        Yes, of course. Shoot a mail at <a href="mailto:contact@theflutterway.com">contact@theflutterway.com</a> and we’ll get back to you shortly.
      </div>
    ),
  },
  {
    title: 'Can I contact/invite you for a talk or a session in an event?',
    contents: (
      <div>
        Yes but responses may delay due to time and resource constraints and unavailability.
      </div>
    ),
  },
  {
    title: `Can I publish my video/s on The Flutter Way youtube channel? If so, what should I do?`,
    contents: (
      <div>
        Sure thing, please follow the process that you just read in the previous section or simply hit <a href="https://theflutterway.medium.com/how-to-publish-your-video-on-theflutterways-youtube-channel-4191cb0a6dae" target="_blank">Get Involved</a> from here or the website header
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="FAQ"
          slogan="In case you're wondering"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
