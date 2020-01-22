export default {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    96,
    128,
    256,
    512
  ],
  fonts: {
    body: 'IBM Plex Mono, monospace',
    heading: "Aldrich, sans-serif",
    monospace: "'Press Start 2P', monospace"
  },
  fontSizes: ['0.875rem', '1rem', '1.15rem', '1.5rem', '1.875rem', '2.25rem', '3rem', '4rem', '4.5rem'],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  colors: {
    text: '#fff',
    background: '#110A31',
    secondary: '#FF247C',
    secondary25: 'rgba(255, 36, 124, 0.25)',
    primary: '#0DC3CF',
    primary25: 'rgba(13, 195, 207, 0.25)',
    muted: '#eeeeee',
    dark: '#000',
    dark50: 'rgba(0,0,0,0.5)',
    purple: '#2E2181',
    gray: '#606060',
    disabled: '#B5B5B5',
    light: '#fff',
    light50: 'rgba(255,255,255,0.5)',
    light25: 'rgba(255,255,255,0.25)',
    transparent: 'rgba(0,0,0,0)',
    warning: '#D83E3E'
  },
  text: {
    monoTitle: {
      fontFamily: 'monospace',
      fontSize: 1,
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: '16px'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'light'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
}
