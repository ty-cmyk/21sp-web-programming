const expect = chai.expect;

describe('p5.PolySynth', function () {
  const audioContext = p5.prototype.getAudioContext();

  it('can be created and disposed', function () {
    const polySynth = new p5.PolySynth();
    polySynth.dispose();
  });

  it('keeps track of the number of voicesInUse', function () {
    const polySynth = new p5.PolySynth();
    const noteDuration = 0.01;

    const noteTriggerTime = audioContext.currentTime;
    const noteActiveTime = noteTriggerTime + noteDuration / 2;
    const noteDoneTime = noteTriggerTime + noteDuration;

    expect(polySynth._voicesInUse.getValueAtTime(noteTriggerTime)).to.equal(0);

    polySynth.play('A2', 0, 0, noteDuration);
    expect(polySynth._voicesInUse.getValueAtTime(noteActiveTime)).to.equal(1);
    polySynth.play('A3', 0, 0, noteDuration);
    expect(polySynth._voicesInUse.getValueAtTime(noteActiveTime)).to.equal(2);
    polySynth.play('A4', 0, 0, noteDuration);
    expect(polySynth._voicesInUse.getValueAtTime(noteActiveTime)).to.equal(3);

    expect(polySynth._voicesInUse.getValueAtTime(noteDoneTime)).to.equal(0);

    polySynth.dispose();
  });
});
