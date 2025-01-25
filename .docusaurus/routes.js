import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '816'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'd59'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '817'),
            routes: [
              {
                path: '/notes',
                component: ComponentCreator('/notes', '5a3'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/other-comps/1compinfo',
                component: ComponentCreator('/other-comps/1compinfo', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/other-comps/winutils',
                component: ComponentCreator('/other-comps/winutils', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/other-comps/zed',
                component: ComponentCreator('/other-comps/zed', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sci/bio',
                component: ComponentCreator('/sci/bio', 'e5a'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/sci/chem',
                component: ComponentCreator('/sci/chem', 'be3'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/sci/phy',
                component: ComponentCreator('/sci/phy', 'f80'),
                exact: true,
                sidebar: "notesSidebar"
              },
              {
                path: '/tutorial-basic/lggp',
                component: ComponentCreator('/tutorial-basic/lggp', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basic/qgp',
                component: ComponentCreator('/tutorial-basic/qgp', '170'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
