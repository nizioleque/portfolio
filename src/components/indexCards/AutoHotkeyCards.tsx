import CardContent from '../CardContent';

function AutoHotkeyCards() {
  return (
    <>
      <CardContent
        name='MX Master Gesture AltTab'
        description="Stop wasting time reaching for your Alt and Tab keys! A new way to switch windows using the MX Master's gesture button."
      />
      <CardContent
        name='Mouse XButtons'
        description="And if you don't use an MX Master – here's something for you: easily switch windows using the Back and Forward buttons of your boring mouse!"
      />
      <CardContent
        name='Horizontal Scroll'
        description='As simple as that – scroll, but horizontally. Does not work in MS Paint on Windows 10, for some reason. Fortunately, this bug has been fixed in Windows 11.'
      />
      <CardContent
        name='Always on Top'
        description='Pin a window to stay always on top of other windows. You can even make it semi-transparent and customize the keyboard shortcut!'
      />
      <CardContent
        name='Music Hotkeys'
        description='Created for my old laptop with no media keys. Maps Play/Pause, Previous/Next track keys to Home/End/PgUp/PgDn'
      />
    </>
  );
}

export default AutoHotkeyCards;
