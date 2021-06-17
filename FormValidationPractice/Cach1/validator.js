function Validator(options) {
	//get parent of element 
	function getParent(inputElement, selector) {
		while (inputElement.parentElement) {
			if (inputElement.parentElement.matches(selector)) { //method use to check
				return inputElement.parentElement
			}
			inputElement = inputElement.parentElement // if condition == false, assign current parent into inputElement to find next parent
		}
	}
	//lay form can validate
	var formElement = document.querySelector(options.form)

	//luu tat ca rule(function handle event) trong object ( id: function)
	var selectorRules = {}

	//validate show errorMsg khi blur
	function validate(inputElement, rule, errorElement) {

		//rules is array function (test) in one id element,
		//test is function to handler that was build before
		var rules = selectorRules[rule.selector]
		var errorMsg

		for (let i = 0; i < rules.length; i++) {
			switch (inputElement.type) {
				case 'radio':

					break
				case 'checkbox':
					errorMsg = rules[i](formElement.querySelector(rule.selector))
					break
				default:
					// lap qua tung funtion and truyen value vao to check each of event
					// event 1 co loi thi thoat va show what errorMsg, neu event 1 k co thi tiep 
					//tuc duyet qua event 2...
					errorMsg = rules[i](inputElement.value)
					if (errorMsg) break;
			}


		}

		//show errorMsg khi co loi
		if (errorMsg) {
			errorElement.innerText = errorMsg
			//invalid to make red text
			getParent(inputElement, options.formGroupSelector).classList.add('invalid')
		} else {
			errorElement.innerText = ''
			getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
		}
		//convert boolean
		return !errorMsg
	}

	//setEvent khi blur
	if (formElement) {
		//khi click submit form
		formElement.onsubmit = function (e) {
			e.preventDefault();
			var isFormValid = true
			options.rules.forEach(function (rule) {
				var inputElement = formElement.querySelector(rule.selector)
				// var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
				var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)

				var isValid = validate(inputElement, rule, errorElement)
				if (!isValid) {
					//neu co 1 cai bi loi == false, ca cai form do se la false
					isFormValid = false

				}
			})

			//neu tat ca k loi, pass data khi dc click submit(dang ky)
			if (isFormValid) {
				//card have 'name' in form-1 are 4 input
				//tra ve 1 node list gom all element
				var enableInputs = formElement.querySelectorAll('[name]')
				console.log(enableInputs)

				// convert sang array  to use reduce
				var formValues = Array.from(enableInputs).reduce(function (acc, crr) {
					acc[crr.name] = crr.value
					return acc
				}, {})

				if (typeof options.onSubmit === 'function') {
					options.onSubmit({
						formValues
					})
				}
			}
		}
		//lap qua tung rule va set event
		options.rules.forEach(function (rule) {

			if (Array.isArray(selectorRules[rule.selector])) {
				selectorRules[rule.selector].push(rule.test)
			} else { // id of element have one function handle event, that stored in array
				selectorRules[rule.selector] = [rule.test]
			}



			//input co the la email hoac fullname
			var inputElement = formElement.querySelector(rule.selector)
			//show error: 4 "form-message" of 4 from-gruop is the same
			//need to take parent of current inputElement and take "form-message"
			var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
			if (inputElement) {
				inputElement.onblur = function () {
					console.log('blue' + rule.selector + '/' + inputElement.value)
					// -- ok da lay dc event blur
					// lay dc rule.test: function + inputElement.value
					validate(inputElement, rule, errorElement)

				}
				//blue show error, not blue -> khi nguoi dung nhap -> remove "invalid"
				inputElement.oninput = function () {
					errorElement.innerText = ""
					getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
				}
			}
		})
		console.log(selectorRules)
	}
}

// 1. co loi -> tra ve msg,
// 2. hop le-> tra ve undefined
// => chi can sua rule
Validator.isRequired = function (id) {
	return {
		selector: id,
		test: function (value) { //value nhan dc
			return value ? undefined : 'vui long nhap truong nay'
		}
	}
}
Validator.isEmail = function (id) {
	return {
		selector: id,
		test: function (value) {
			var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			return regex.test(value) ? undefined : 'vui long nhap email hop le'
		}
	}
}
Validator.minLength = function (id, min) {
	return {
		selector: id,
		test: function (value) {
			return value.length > min ? undefined : 'Mat khau phai dai hon 6 ky tu'
		}
	}
}
Validator.isConfirmed = function (id, getPasswordValue) {
	return {
		selector: id, // id is gia tri password_confirmation
		test: function (value) {
			return value.trim() === getPasswordValue().trim() ? undefined : 'Mat khau khong trung'
		}
	}
}
