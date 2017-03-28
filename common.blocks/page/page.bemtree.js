block('page').content()(function() {
    // this.data = this.ctx.data;

    console.log(this.data);

    return [
        {
            block: 'calendar'
        }
    ];
});
