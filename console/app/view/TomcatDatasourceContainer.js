/*
 * File: app/view/TomcatDatasourceContainer.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('webapp.view.TomcatDatasourceContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.TomcatDatasourceContainer',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Separator',
        'Ext.form.field.Text',
        'Ext.toolbar.Paging',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    id: 'tomcatDSGrid',
                    itemId: 'tomcatDSGrid',
                    title: 'DataSource List',
                    forceFit: true,
                    store: 'TomcatInstanceListStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 30,
                            dataIndex: 'id',
                            text: 'ID'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'instanceName',
                            text: 'DataSource Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 70,
                            dataIndex: 'ipAddr',
                            text: 'JDBC Url'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 70,
                            dataIndex: 'httpPort',
                            text: '대상서버 개수'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var formWindow = Ext.create("widget.TomcatInstanceFormWindow");
                                        formWindow.show();
                                    },
                                    id: 'createTomcatInstBtn1',
                                    text: '생성'
                                },
                                {
                                    xtype: 'button',
                                    text: '삭제'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'searchInstanceName1',
                                    itemId: 'searchInstanceName',
                                    fieldLabel: 'Filtering',
                                    labelWidth: 60,
                                    name: 'searchInstanceName',
                                    emptyText: 'Instance Name'
                                }
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            store: 'TomcatInstanceListStore'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    region: 'south',
                    split: true,
                    height: 150,
                    id: 'tomcatDSTabPanel',
                    itemId: 'tomcatDSTabPanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: '상세정보'
                        },
                        {
                            xtype: 'panel',
                            title: '대상서버'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});