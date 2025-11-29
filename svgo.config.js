export default {
  multipass: true,
  plugins: [
    'removeDimensions',
    'removeXMLNS',
    { name: 'removeAttrs', params: { attrs: ['data-name'] } },
    { name: 'cleanupIds', params: { remove: true, prefix: 'br-' } },
  ],
};
