StartupEvents.registry('item', event => {
    event.create('source_infused_cogwheel').displayName('Source-Infused Cogwheel').tooltip('Магічний механізм без стресу');
    event.create('kinetic_storm_scroll').displayName('Scroll of Kinetic Storm').glow(true);
    event.create('absolute_magic_engine').displayName('Absolute Magic Engine').tooltip('Генерує 16000 SU');
    event.create('incomplete_engine').displayName('Incomplete Magic Engine').type('create:sequenced_assembly');
})