var APP_DATA = {
  "scenes": [
    {
      "id": "0-panormica",
      "name": "Panorámica",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.737287965099176,
          "pitch": 1.4717047633257074,
          "rotation": 0,
          "target": "1-lateral-1"
        },
        {
          "yaw": 0.0713588071602409,
          "pitch": 1.0547568849308142,
          "rotation": 0,
          "target": "2-superior"
        },
        {
          "yaw": -0.2891902575036074,
          "pitch": 0.8836368694452315,
          "rotation": 0,
          "target": "3-lateral-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lateral-1",
      "name": "Lateral 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6090162598954212,
          "pitch": -0.05933672153197911,
          "rotation": 0,
          "target": "2-superior"
        },
        {
          "yaw": -0.6153431035595283,
          "pitch": -0.4056180260050013,
          "rotation": 0,
          "target": "0-panormica"
        },
        {
          "yaw": 0.01172557428901122,
          "pitch": 0.1515551943042439,
          "rotation": 0,
          "target": "3-lateral-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-superior",
      "name": "Superior",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09838387567195817,
          "pitch": 0.6988603459064215,
          "rotation": 0,
          "target": "3-lateral-2"
        },
        {
          "yaw": 3.0861953889767815,
          "pitch": 0.5410135329020491,
          "rotation": 0,
          "target": "1-lateral-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lateral-2",
      "name": "Lateral 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6790714582884796,
          "pitch": 0.18673525622340392,
          "rotation": 0,
          "target": "1-lateral-1"
        },
        {
          "yaw": -3.0507011315062673,
          "pitch": 0.08393661392165974,
          "rotation": 0,
          "target": "2-superior"
        },
        {
          "yaw": -3.042610010260267,
          "pitch": -0.36883116281645556,
          "rotation": 0,
          "target": "0-panormica"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Luanda",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
