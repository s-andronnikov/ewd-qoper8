describe("Master", function() {
    // init environment
    const qoper8 = require('../../lib/ewd-qoper8');
    var master = new qoper8.masterProcess();
    jasmine.clock().install();

    xdescribe("VERSION", function () {
        it ("should be not empty string", function () {
            var version = master.version();
            expect(version).toBeNonEmptyString();
        });
    });

    xdescribe("QUEUE", function () {
        it ("should have control methods", function () {
            var spy1 = spyOn(master, 'start');
            expect(master.start).toBeDefined();
            master.start();
            expect(spy1).toHaveBeenCalled();

            var spy2 = spyOn(master, 'stop');
            expect(master.stop).toBeDefined();
            master.stop();
            expect(spy2).toHaveBeenCalled();
        });


        it ("Should invoke 'start' and 'started' event", function () {
            var spy = spyOn(master, "emit");
            master.start();
            expect(spy).toHaveBeenCalledWith("start");
            expect(spy).toHaveBeenCalledWith("started");
            setTimeout(function() {
                master.stop();
            }, 100);
        }, 300);
    });


    describe("WORKER", function () {
    //     it ("should have process id", function () {
    //         console.log(master.process());
    //         expect(master.process)
    //             .toBeNumber()
    //             .toBeGreaterThan(0);
        //
        // })
    //
    //
    });
    //
    //
    /** @todo */
    // describe('upTime', function () {
    //     it('', function () {
    //
    //     });
    // })
});
