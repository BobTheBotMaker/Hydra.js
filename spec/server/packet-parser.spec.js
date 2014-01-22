/**
 * Created with IntelliJ IDEA.
 * User: andre
 * Date: 11/26/13
 * Time: 4:31 PM
 * To change this template use File | Settings | File Templates.
 */

describe("The Server test suite", function(){

  var Parser = require("../../lib/packet-parser")
  var data = [0x73, 0x00,0x00,0x00,0x73, 0x00, 0x00, 0x6E, 0x00, 0x70, 0x73, 0x73, 0x6E, 0x70, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15,0x16, 0x17, 0x18, 0x19, 0x20];
  var packet = new Buffer([0x73, 0x6E, 0x70, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15,0x16, 0x17, 0x18, 0x19]);

  it("should print parse a packet", function(){
    var result = new Buffer(23);

    var processPacket = function(packet){
      result = packet;
    }

    var p = new Parser(processPacket);

    data.forEach(function(byte){
      p.parse(byte)
    });

    expect(result.toString("hex")).toEqual(packet.toString("hex"));

  });

  it("should print parse two packets", function(){
    var result = new Buffer(23);

    var processPacket = function(packet){
      result = packet;
    }

    var p = new Parser(processPacket);

    data.forEach(function(byte){
      p.parse(byte)
    });

    expect(result.toString("hex")).toEqual(packet.toString("hex"));

  })

})