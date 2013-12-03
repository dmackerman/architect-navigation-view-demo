/*
 * File: app/view/Step2Panel.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('NavigationViewDemo.view.Step2Panel', {
  extend: 'Ext.form.Panel',
  alias: 'widget.step2',

  config: {
    padding: 20,
    items: [
      {
        xtype: 'fieldset',
        margin: '0 0 20 0 ',
        title: 'Enter another Number',
        items: [
          {
            xtype: 'numberfield',
            margin: '',
            label: '',
            name: 'number2',
            placeHolder: 'Yeah, a second number.'
          }
        ]
      },
      {
        xtype: 'button',
        ui: 'action',
        text: 'Next'
      }
    ]
  }

});