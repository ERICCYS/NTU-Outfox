# How to run
if you haven't install dependency, please run `npm install`. After all dependencies are install, run `npm run start`

# How to deploy in Django
1. copy the whole react-front folder into django root
2. move build.sh and fix_js_path.py into django root
3. run `./build.sh index.html`, this automatically move all static files to `DjangoRoot/static/`
and `index.html` to `Django/templates`. If you have any special request, please refer to `build.sh` for modification.

# Project Structure
```
| - public
| | - favicon.ico
| | - index.html
| | - manifest.json
| - src
| | - asset               # pictures
| | - common              # common components
| | - components          # app component
| | | - common            # common component
| | | - dashboard         # dashboard app
| | | | - common          # common components
| | | | - model           # model management
| | | | - productSearch
| | | | - resource        # resource management
| | | | - userMng         # user management
| | | | - video           # video management
| | | | - watch           # player
| | |  
| | | - home              # home app
| |
| | - constants           # action types
| | - css
| | - redux               # redux root
| | | - actions           # crud methods here
| | | | - model
| | | | - product
| | | | - user
| | | | - video
| | |
| | | - reducers          # action responses here
| | | | - model
| | | | - product
| | | | - user
| | | | - video
| | |
| | | - store
| | 
| | - routes              # router components
| | - utils
|   | - httpRequest.js    # requrest template
|   | - jsonDecoder.js    # response json decoder
|   | - utils.js
|
| - index.js              # component render root
| - JssRegistry.js        # theme register
| - registerServiceWorker.js
| - urls                  # root app urls
```

# API requirement

## get specific video info:  
post 
```
{id}
```
receive
```
{
    time,
    data: {
        name: string: video name,
        description: string: video description,
        url: string: video source url,
        pic: string: video 1920x1080 cover url,
        processed: bool: is processed,
        width: number: video width in px,
        height: number: video height in px,
        result: visual: {object/face/text/scene/: list:
            list: {
                id: string: object detection id,
                cat: string: object category,
                src: string: object thumbnail,
                model: string: model name,
                score: number: object category confidence,
                x1: number: object left edge in px,
                x2: number: object right edge in px,
                y1: number: object top edge in px,
                y2: number: object bottom edge in px,
            }
        ads: list: {
            poster: string: ad poster,
            url: string: ad url,
            start: number: ad start time in second,
            end: number: ad end time in second,
        }
    }
}
```
## video process request
post
```
{
    id: string: video id,
}
```
receive
```
{
    time,
    data: string: reason of error,
    status: number: status code
}
```
## get user info
receive
```
{
    time,
    data: list: {
        avatar: string: nullable, user avatar url
        groups: list: ...,
        email: string: ...
        first_name: string: ...,
        last_name: string: ...,
        username: string: ...,
        is_superuser: bool: ...,
        is_staff: bool: ...,
        is_active: bool: ...,
        ...any if I missed
    }
}
```
## create user
post
```
{
    avatar: bolb img/*: null currently,
    groups: list: ...,
    email: string: ...,
    first_name: string: ...,
    last_name: string: ...,
    username: string: ...,
    password: encrypt code, Basic
    is_superuser: bool: ...,
    is_staff: bool: ...,
    is_active: bool: ...,
}
```
receive
```
{
    time,
    data: string: reason of error,
    status: number: status code
}
```
## update user
post
```
{
    id: string: user id,
    avatar: bolb img/*: null currently,
    groups: list: ...,
    email: string: ...,
    first_name: string: ...,
    last_name: string: ...,
    is_superuser: bool: ...,
    is_staff: bool: ...,
    is_active: bool: ...,
}
```
## get specific model info
post 
```
{
    id: user id
}
```
receive
```
{
    time,
    data: {
        name: string: model name,
        type: string: model type,
        cover: string: set "" now, model cover 128x128 url,
        description: string: model description,
        snapshot: list: string: set empty now, model screen shot url,
        owned: bool: set to true now,
    }
}
```
## create model
post
```
{
    name: string: model name,
    type: string: model type,
    cover: blob img/*: null now, model cover 128x128,
    description: string: model description,
    snapshot: list: string: set empty now,
    file: blob any: file uploaded,
    ...any I missed,
}
```
receive
```
{
    time,
    data: string: reason of error,
    status: number: status code
}
```
## update model @next
not available now
## search for product
post
```
{
    text: string: text filter,
    scene: blob */img: scene filter,
    face: blob */img: face filter,
    <@next
    text: string: text filter,
    img: blob */img: object filter,
    scene: string: scene filter,
    > next version
}
```
receive
```
{
    time,
    data: list: {
        id: string: video id,
        cover: string: 210x118 cover url,
        name: string: video name
        start: number: start time in second,
        end: number: end time in second,
    },
}
```
## insert ad
post
```
{
    id: string: video id,
    start: number: start time in second,
    end: number: end time in second,
}
```
receive
```
{
    time,
    data: string: reason of error,
    status: number: status code
}
```

