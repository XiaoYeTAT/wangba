﻿$axure.loadCurrentPage({
  "url":"改密提示窗口.html",
  "generationDate":new Date(1560007669908.89),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"3a0d55d015a54b298c881f393e423dc0",
    "type":"Axure:Page",
    "name":"改密提示窗口",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"center",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"c0bcbffbcd7b4c7cba12ba44cb81224d",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"28px",
            "location":{
              "x":370,
              "y":160},
            "size":{
              "width":200,
              "height":33}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7ea4d677e0ac4118a2083a437cede7f2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"28px",
                "location":{
                  "x":370,
                  "y":160},
                "size":{
                  "width":200,
                  "height":33}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"3f5f0da721b149048dd1fe622ca89991",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":420,
              "y":250},
            "size":{
              "width":90,
              "height":40}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 父窗口 打开 用户管理",
                      "target":{
                        "targetType":"page",
                        "url":"用户管理.html",
                        "includeVariables":true},
                      "linkType":"parent"},
{
                      "action":"closeCurrent",
                      "description":"关闭当前窗口"}]}]}},
          "tabbable":true}]}},
  "masters":{
},
  "objectPaths":{
    "c0bcbffbcd7b4c7cba12ba44cb81224d":{
      "scriptId":"u0"},
    "7ea4d677e0ac4118a2083a437cede7f2":{
      "scriptId":"u1"},
    "3f5f0da721b149048dd1fe622ca89991":{
      "scriptId":"u2"}}});