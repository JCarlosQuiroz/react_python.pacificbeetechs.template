import { Stack } from '@fluentui/react';
import { makeStyles, shorthands, tokens, Button, Text, Caption1, Badge, Radio, Body1, mergeClasses, Avatar } from "@fluentui/react-components";
import { AlertUrgent16Filled, Attach16Regular, CalendarLtr16Regular, CheckmarkCircle16Regular, CircleHalfFill16Regular, Comment16Regular, MoreHorizontal16Filled, MoreHorizontal48Regular } from '@fluentui/react-icons';
import { Card, CardHeader, CardPreview } from "@fluentui/react-components/unstable";
export const ASSET_URL = 'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card';
const powerpointLogoURL = ASSET_URL + '/assets/powerpoint_logo.svg';

const useStyles = makeStyles({
  mainContainer: {
    height: '1800px',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    ...shorthands.gap('16px')
  },
  fixedWidth: {
    height: 'fit-content',
    width: '280px'
  },
  caption: {
    color: tokens.colorNeutralForeground3
  },
  headerImage: {
    maxWidth: '44px',
    maxHeight: '44px',
    ...shorthands.borderRadius('4px')
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...shorthands.gap('4px')
  },
  appIcon: {
    height: '32px',
    ...shorthands.borderRadius('4px')
  },
  spacedContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskHeader: {
    display: 'flex'
  },
  spacedPreview: { ...shorthands.padding('25px')
  },
  smallRadius: { ...shorthands.borderRadius(tokens.borderRadiusSmall)
  },
  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3
  },
  logoBadge: {
    backgroundColor: '#FFF',
    ...shorthands.padding('5px'),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)'
  }
});

function App() {
  const styles = useStyles();
  return <div className={styles.mainContainer}>
           <Stack
       horizontalAlign="center"
       tokens={{
         padding: "10px 0px 0px 0px",
         childrenGap: "0%",
         maxHeight: "100%",
         maxWidth: "100%",
       }}
     >
      <Card className={styles.fixedWidth}>
        <CardHeader image={{
        as: 'img',
        src: powerpointLogoURL
      }} header={<Text weight="semibold">Team offsite 2020</Text>} description={<Caption1 className={styles.caption}>Onedrive &gt; Files</Caption1>} action={<Button appearance="transparent" icon={<MoreHorizontal16Filled />} onClick={action('Example 1 button pressed')} />} />
      </Card>

      <Card className={styles.fixedWidth}>
        <CardHeader image={{
        as: 'img',
        className: styles.headerImage,

      }} header={<Text weight="semibold">App Name</Text>} description={<Caption1 className={styles.caption}>Developer</Caption1>} action={<Button appearance="transparent" icon={<MoreHorizontal16Filled />} onClick={action('Example 1 button pressed')} />} />
        <span>
          Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar
          plum.
        </span>
      </Card>

      <Card className={styles.fixedWidth}>
        <div className={styles.flexContainer}>
          {/* <img className={styles.appIcon} />
          <img className={styles.appIcon}  /> */}
        </div>
        <CardHeader header={<Text weight="semibold">Alert in Teams when a new document is uploaded in channel</Text>} description={<Caption1 className={styles.caption}>By Microsoft</Caption1>} />
        <div className={mergeClasses(styles.flexContainer, styles.spacedContainer)}>
          <span>Automated</span>
          <span>3290</span>
        </div>
      </Card>

      <Card className={styles.fixedWidth}>
        <div className={styles.flexContainer}>
          <Badge color="severe" shape="rounded" appearance="tint">
            Red
          </Badge>
          <Badge color="success" shape="rounded" appearance="tint">
            Green
          </Badge>
          <Badge color="brand" shape="rounded" appearance="tint">
            Blue
          </Badge>
        </div>
        <div className={styles.taskHeader}>
          <Radio />
          <div>
            <Text block weight="semibold">
              Task title
            </Text>
            <Caption1 block className={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar
              plum.
            </Caption1>
          </div>
        </div>
        <div className={mergeClasses(styles.flexContainer, styles.spacedContainer)}>
          <AlertUrgent16Filled primaryFill="#C4314B" />
          <CircleHalfFill16Regular primaryFill="#0078DB" />
          <div className={styles.flexContainer}>
            <CalendarLtr16Regular />
            <Body1>03/22/20</Body1>
          </div>
          <Comment16Regular />
          <div className={styles.flexContainer}>
            <Attach16Regular />
            <Body1>4</Body1>
          </div>
          <div className={styles.flexContainer}>
            <CheckmarkCircle16Regular />
            <Body1>2/12</Body1>
          </div>
        </div>
      </Card>

      <Card className={styles.fixedWidth}>
        <CardPreview className={mergeClasses(styles.spacedPreview, styles.grayBackground)} logo={<img className={styles.logoBadge} alt="app logo"  />}>
          <img alt="presentation preview"  className={styles.smallRadius} />
        </CardPreview>
        <CardHeader header={<Body1 weight="semibold">iOS App Prototype</Body1>} description={<Caption1 className={styles.caption}>You created 53m ago</Caption1>} action={<Button appearance="transparent" icon={<MoreHorizontal48Regular />} onClick={action('Example 5 button pressed')} />} />
      </Card>

      <Card className={styles.fixedWidth}>
        <CardPreview logo={<img alt="app logo" className={styles.logoBadge} />}>
          <img alt="file preview" />
        </CardPreview>
        <CardHeader image={<Avatar image={{
        
      }} />} header={<Body1 weight="semibold">Classroom Collaboration</Body1>} description={<Caption1 className={mergeClasses(styles.flexContainer, styles.caption)}>
              <Comment16Regular color="#D83B01" />
              <span>Colin replied to a comment</span>
            </Caption1>} action={<Button appearance="transparent" icon={<MoreHorizontal48Regular />} onClick={action('Example 6 button pressed')} />} />
      </Card>
      </Stack>
    </div>;

}

function action(onClick: string){
  return () => {
    console.log(onClick);
  }
}
export default App;