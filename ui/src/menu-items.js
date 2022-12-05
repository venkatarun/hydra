const menuItems = {
  items: [
    {
      id: 'navigation',
      title: '',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/app/dashboard',
          icon: 'feather icon-home'
        },
        {
            id: 'datasource',
            title: 'Datasource',
            type: 'item',
            url: '/app/datasource',
            icon: 'feather icon-layers'
        },
        {
            id: 'visualization',
            title: 'Visualization',
            type: 'item',
            url: '/app/visualization',
            icon: 'feather icon-pie-chart'
        },
        {
            id: 'aaas',
            title: 'AaaS',
            type: 'item',
            url: '/app/runtimeapi',
            icon: 'feather icon-settings'
        },
        {
            id: 'daas',
            title: 'DaaS',
            type: 'item',
            url: '/app/daas',
            icon: 'feather icon-layout'
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'item',
            url: '/app/jobs',
            icon: 'feather icon-repeat'
        }
      ]
    },
  ]
};

export default menuItems;
