module.exports = {
  name: 'continental',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/continental',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
