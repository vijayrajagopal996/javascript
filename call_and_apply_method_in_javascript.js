const billy = {
  money: 20000,
  transferAmount(amountToBeTransferred) {
    return amountToBeTransferred > this.money ? 'Sorry i do not have that much money' : amountToBeTransferred;
  }
}

const sally = {
  money: 20,
  //how do i borrow money from billy
  console.log(money);
}

billy.transferAmount.call(sally,30);

/* call is used to borrow or to reuse functions.
/* if you want to reuse a function in other function you could use call and apply.
