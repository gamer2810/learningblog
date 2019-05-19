var tabItem = new MetroTabItem() {Name = "KavaDocsTree"};

// Create the tab content user control
KavaDocsTopicTreeTab = tabItem;
Tree = new TopicsTree();
tabItem.Content = Tree;

Model.Window.AddLeftSidebarPanelTabItem(tabItem,"Kava Docs",null);
