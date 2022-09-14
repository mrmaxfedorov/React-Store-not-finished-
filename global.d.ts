// STYLES
declare module '*.scss' {
  const styles: {[className: string]: string};
  export = styles;
}

declare module '*.css' {
  const styles: {[className: string]: string};
  export = styles;
}

// IMAGES
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// FILES
declare module '*.json' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.jpeg' {
  const value: any;
  export = value;
}