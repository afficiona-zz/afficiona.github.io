(function () {
  "use strict";

  // let blocks = [
  //   {
  //     id: 'cube',
  //     className: '.cube',
  //     orientation: 'left',
  //     width: 30,
  //     height: 30
  //   },
  //   {
  //     id: 'small-L-left',
  //     className: '.small-l.left',
  //     orientation: 'left',
  //     width: 10,
  //     height: 30
  //   },
  //   {
  //     id: 'small-L-bottom',
  //     className: '.small-l.bottom',
  //     orientation: 'bottom',
  //     width: 30,
  //     height: 10
  //   },
  //   {
  //     id: 'capital-L-bottom',
  //     className: '.capital-l.bottom',
  //     orientation: 'bottom',
  //     width: 30,
  //     height: 20
  //   },
  //   {
  //     id: 'capital-L-left',
  //     className: '.capital-l.left',
  //     orientation: 'left',
  //     width: 20,
  //     height: 30
  //   }
  // ];
  //
  // blocks = [
  //   {
  //     id: 'capital-L-bottom',
  //     className: '.capital-l.bottom',
  //     orientation: 'bottom',
  //     width: 30,
  //     height: 20
  //   }
  // ];
  //
  // let selectedBlock, selectedBlockOffsetTop;
  // let lastFallenBlock, randomBlock;
  // let deadBottomPosition = $('#field').offset().top + $('#field').height();
  // _triggerNextBlock();
  //
  // function _triggerNextBlock() {
  //   randomBlock = blocks[Math.floor(Math.random() * blocks.length)];
  //   selectedBlock = $(`${randomBlock.className}`).clone().appendTo('#field');
  //   selectedBlockOffsetTop = selectedBlock.offset().top + selectedBlock.height();
  //   selectedBlock.show();
  //   $('#sidePanel').remove('.block').html(selectedBlock.clone());
  //   _startBlockFallingTimer();
  // }
  //
  // function _startBlockFallingTimer() {
  //   let i = 0;
  //   let blockFallingInterval = setInterval(() => {
  //     i += 10;
  //     selectedBlock.css('top', i);
  //     selectedBlockOffsetTop = selectedBlock.offset().top + selectedBlock.height();
  //     if (selectedBlockOffsetTop === deadBottomPosition) {
  //       clearInterval(blockFallingInterval);
  //       lastFallenBlock = selectedBlock;
  //       deadBottomPosition = selectedBlockOffsetTop;
  //       _triggerNextBlock();
  //     }
  //   }, 50);
  // }

  console.log('sdf');

})();
