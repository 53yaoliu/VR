var APP_DATA = {
  "scenes": [
    {
      "id": "0-360",
      "name": "地政局360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.5020460870618315,
        "pitch": 0.026865602202164496,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.4272666693769,
          "pitch": 0.45373905794893865,
          "rotation": 0,
          "target": "1--360"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7962795536503258,
          "pitch": 0.09359312672128439,
          "title": "<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1--360",
      "name": "產業局 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.044156250957028575,
          "pitch": 0.5008138149485237,
          "rotation": 0,
          "target": "2-360"
        },
        {
          "yaw": 0.23978641652608346,
          "pitch": 0.4935374239737307,
          "rotation": 3.141592653589793,
          "target": "0-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360",
      "name": "交通局360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9652588540467946,
        "pitch": -0.0951201839086444,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.2975772081812664,
          "pitch": 0.34042088638580736,
          "rotation": 12.566370614359176,
          "target": "3-360"
        },
        {
          "yaw": -1.0407365336966201,
          "pitch": 0.3847154472557648,
          "rotation": 3.141592653589793,
          "target": "1--360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360",
      "name": "資訊局360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.11728604004473908,
          "pitch": 0.5005793848478337,
          "rotation": 0,
          "target": "4-360"
        },
        {
          "yaw": 0.19201872934571362,
          "pitch": 0.5045931629135545,
          "rotation": 3.141592653589793,
          "target": "2-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-360",
      "name": "環保局360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.876550097503646,
        "pitch": 0.11628269646518063,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.0368746496815788,
          "pitch": 0.6556224556716224,
          "rotation": 3.141592653589793,
          "target": "3-360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "高樓層",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
