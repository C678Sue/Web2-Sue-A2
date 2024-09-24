document.addEventListener("DOMContentLoaded", () => {
    const fundraiserList = document.getElementById('fundraiser-list');

    // 示例筹款活动数据
    const fundraisers = [
        {
            id: 1,
            organiser: 'Jackson',
            caption: "Help The Jackson's Rebuild After Flood",
            targetFunding: 10000