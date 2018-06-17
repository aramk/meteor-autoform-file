Package.describe({
  name: "aramk:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.4.2_1",
  git: "https://github.com/yogiben/autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');

  api.use([
    'check',
    'coffeescript@2.2.1_1',
    'underscore',
    'reactive-var',
    'templating@1.3.2',
    'less@1.0.0 || 2.5.1',
    'aldeed:autoform@5.5.1',
    'fortawesome:fontawesome@4.5.0',
    'cfs:ui@0.1.3',
    'mpowaga:jquery-fileupload@9.11.2'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
