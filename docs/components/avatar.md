# Avatar
Avatars are images that users can set as their profile picture.

## Example

<div class="p-3 border rounded-2 my-3">
  <v-avatar src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" :size="32" />
</div>

```html
<v-avatar
  src="{{ imageUrl }}"
  alt="My avatar"
  :size="32"
/>
```

## Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | -----
src        | String   | Image's url  | None
alt        | String   | Image's alt text | 'Avatar'
size       | String, Number  | Image's size | 32
